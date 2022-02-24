import { getFeedbacksFromLocalStorage, setFeedbacksIntoLocalStorage } from "../../shared/localStorageUtils";

export const saveFeedbackToLocalStorage = (feedback) => {
    const feedbacks = getFeedbacksFromLocalStorage();
    feedbacks.push(feedback);
    setFeedbacksIntoLocalStorage(feedbacks);
};
