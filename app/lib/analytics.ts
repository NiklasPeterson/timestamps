import { v4 as uuidv4 } from 'uuid';

// Client-side functions only
export function getVisitorId() {
  if (typeof window === 'undefined') return uuidv4();
  
  let visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem('visitorId', visitorId);
  }
  return visitorId;
}

export function getSessionId() {
  if (typeof window === 'undefined') return uuidv4();

  let sessionId = sessionStorage.getItem('sessionId');
  const lastActivity = sessionStorage.getItem('lastActivity');
  const now = Date.now();

  if (lastActivity && now - parseInt(lastActivity) > 30 * 60 * 1000) {
    sessionId = null;
  }

  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem('sessionId', sessionId);
  }
  
  sessionStorage.setItem('lastActivity', now.toString());
  return sessionId;
}