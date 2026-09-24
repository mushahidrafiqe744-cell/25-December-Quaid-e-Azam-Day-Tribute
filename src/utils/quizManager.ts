import { QuizQuestion } from '../types';
import { INITIAL_QUIZ_QUESTIONS } from '../data/tributeData';

const QUIZ_STORAGE_KEY = 'quaid_tribute_quiz_questions_v2';
const QUIZ_PASSED_KEY = 'quaid_tribute_verified_pass_v1';
const QUIZ_HISTORY_KEY = 'quaid_tribute_answered_ids_v1';

export function getStoredQuestions(): QuizQuestion[] {
  try {
    const data = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to parse stored quiz questions', err);
  }
  return INITIAL_QUIZ_QUESTIONS;
}

export function saveStoredQuestions(questions: QuizQuestion[]): void {
  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(questions));
  } catch (err) {
    console.error('Failed to save quiz questions', err);
  }
}

export function getVerifiedPassStatus(): { isPassed: boolean; score: number; total: number } {
  try {
    const data = localStorage.getItem(QUIZ_PASSED_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch {}
  return { isPassed: false, score: 0, total: 0 };
}

export function saveVerifiedPassStatus(score: number, total: number): void {
  try {
    const isPassed = total > 0 && (score / total) >= 0.5; // 50% threshold
    localStorage.setItem(
      QUIZ_PASSED_KEY,
      JSON.stringify({ isPassed, score, total, timestamp: new Date().toISOString() })
    );
  } catch {}
}

export function getAnsweredQuestionIds(): number[] {
  try {
    const data = localStorage.getItem(QUIZ_HISTORY_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch {}
  return [];
}

export function recordAnsweredQuestionId(id: number): void {
  try {
    const current = getAnsweredQuestionIds();
    if (!current.includes(id)) {
      current.push(id);
      localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(current));
    }
  } catch {}
}

export function resetAnsweredHistory(): void {
  try {
    localStorage.removeItem(QUIZ_HISTORY_KEY);
  } catch {}
}

/**
 * Returns a randomized subset of unrepeated questions from the pool.
 * If all have been seen, it resets history so questions seamlessly loop without immediate repetition.
 */
export function getNonRepeatingQuestionBatch(batchSize: number = 4): QuizQuestion[] {
  const allQuestions = getStoredQuestions();
  const seenIds = new Set(getAnsweredQuestionIds());

  let available = allQuestions.filter((q) => !seenIds.has(q.id));

  // If we ran out of unseen questions, reset the answered history
  if (available.length < batchSize) {
    resetAnsweredHistory();
    available = [...allQuestions];
  }

  // Shuffle array using Fisher-Yates
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(batchSize, shuffled.length));
}
