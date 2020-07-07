// @flow

import {
    ADD_MESSAGE,
    CLEAR_MESSAGES,
    SEND_MESSAGE,
    SET_PRIVATE_MESSAGE_RECIPIENT,
    SEND_BEER_CHAT,
    TOGGLE_CHAT
} from './actionTypes';
import { openDialog } from '../base/dialog';
import BeerChatDialog from './components/web/beer-chat-dialog/BeerChatDialog';

/**
 * Adds a chat message to the collection of messages.
 *
 * @param {Object} messageDetails - The chat message to save.
 * @param {string} messageDetails.displayName - The displayName of the
 * participant that authored the message.
 * @param {boolean} messageDetails.hasRead - Whether or not to immediately mark
 * the message as read.
 * @param {string} messageDetails.message - The received message to display.
 * @param {string} messageDetails.messageType - The kind of message, such as
 * "error" or "local" or "remote".
 * @param {string} messageDetails.timestamp - A timestamp to display for when
 * the message was received.
 * @returns {{
 *     type: ADD_MESSAGE,
 *     displayName: string,
 *     hasRead: boolean,
 *     message: string,
 *     messageType: string,
 *     timestamp: string,
 * }}
 */
export function addMessage(messageDetails: Object) {
    return {
        type: ADD_MESSAGE,
        ...messageDetails
    };
}

/**
 * Clears the chat messages in Redux.
 *
 * @returns {{
 *     type: CLEAR_MESSAGES
 * }}
 */
export function clearMessages() {
    return {
        type: CLEAR_MESSAGES
    };
}

/**
 * Action that triggers opening the beer chat dialog.
 *
 * @returns {Function}
 */
export function openBeerChatDialog() {
    return function(dispatch: (Object) => Object) {
        dispatch(openDialog(BeerChatDialog));
    };
}

/**
 * Sends a chat message to everyone in the conference.
 *
 * @param {string} message - The chat message to send out.
 * @param {boolean} ignorePrivacy - True if the privacy notification should be ignored.
 * @returns {{
 *     type: SEND_MESSAGE,
 *     ignorePrivacy: boolean,
 *     message: string
 * }}
 */
export function sendMessage(message: string, ignorePrivacy: boolean = false) {
    return {
        type: SEND_MESSAGE,
        ignorePrivacy,
        message
    };
}

/**
 * Sends a beer chat to everyone in the conference
 *
 * @param {number} amount - The beer chat amount
 * @param {string} message - The beer chat message
 * @returns {{
 *     type: SEND_BEER_CHAT,
 *     amount: number,
 *     message: string
 * }}
 */
export function sendBeerChat(amount, message) {
    return {
        type: SEND_BEER_CHAT,
        amount,
        message
    };
}

/**
 * Initiates the sending of a private message to the supplied participant.
 *
 * @param {Participant} participant - The participant to set the recipient to.
 * @returns {{
 *     participant: Participant,
 *     type: SET_PRIVATE_MESSAGE_RECIPIENT
 * }}
 */
export function setPrivateMessageRecipient(participant: Object) {
    return {
        participant,
        type: SET_PRIVATE_MESSAGE_RECIPIENT
    };
}

/**
 * Toggles display of the chat side panel.
 *
 * @returns {{
 *     type: TOGGLE_CHAT
 * }}
 */
export function toggleChat() {
    return {
        type: TOGGLE_CHAT
    };
}
