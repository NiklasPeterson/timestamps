import { v4 as uuidv4 } from 'uuid';

export function getVisitorId() {
  if (typeof window === 'undefined') return uuidv4();

  let visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem('visitorId', visitorId);
  }

  return visitorId;
}
