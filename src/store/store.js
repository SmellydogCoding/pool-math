import Vue from 'vue';
import Vuex from 'vuex';
import {getNewAnswerSet} from './newAnswerSet';
import formulas from './formulas';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    units: {},
    problem: '',
    correct: 0,
    answers: [],
    image: {},
    hint: {},
    next: {},
    newButton: '',
    answer: 0,
    attempts: 0,
    noAnswer: true,
    showCorrect: false,
    showIncorrect: false,
    showHintButton: false,
    showAnswerButton: true,
    showNextButton: false,
    correctMessage: '',
    incorrectMessage: `Bummer!\u00A0\u00A0That answer is not correct.\u00A0\u00A0Please try again.`,
    hintWidth: '500px',
  },
  getters: {  // send state to a component
    units: state => { return state.units },
    correct: state => { return state.correct },
    image: state => { return state.image },
    select: state => {
      let data = {answers: state.answers, hint: state.hint, width: state.hintWidth, showCorrect: state.showCorrect, showHintButton: state.showHintButton}
      return data;
    },
    newOrNext: state => {
      let data = {showCorrect: state.showCorrect, next: state.next, newButton: state.newButton}
      return data;
    },
    answerMessage: state => {
      let data = {showCorrect: state.showCorrect, correctMessage: state.correctMessage, showIncorrect: state.showIncorrect, incorrectMessage: state.incorrectMessage}
      return data;
    }
  },
  mutations: { // modify state synchronously
    setCurrentProblem: (state, payload) => {
      state.units = payload.units;
      state.problem = payload.problem;
      state.correct = formulas[state.problem].correct(state.units);
      state.correctMessage = formulas[state.problem].correctMessage(state.units, state.correct);
      state.image = payload.image;
      state.hint = payload.hint;
      state.next = payload.next;
      state.newButton = payload.newButton;
    },
    setAnswerSet: (state) => {
      let answerSet = getNewAnswerSet(state.correct);
      state.answers = answerSet;
    },
    setCorrectMessage: (state,message) => {
      state.correctMessage = message;
    },
    answerQuestion: (state, answer) => {
      state.answer = answer;
      if (state.answer === state.correct) {
        state.showHintButton = false;
        state.showCorrect = true;
        state.showIncorrect = false;
      } else {
        state.showIncorrect = true;
        state.attempts ++;
        if (state.attempts >= 2) { state.showHintButton = true; } // show hint button after 2 incorrect answers
      }
    },
    resetProblem: (state) => {
      state.units = {};
      state.correct = 0;
      state.answers = [];
      state.answer = 0;
      state.attempts = 0;
      state.noAnswer = true;
      state.showCorrect = false;
      state.showHintButton = false;
      state.showIncorrect = false;
      state.showAnswerButton = true;
      state.showNextButton = false;
    },
  },
  actions: { // modify state aschronously
    init: ({state,commit},payload) => {
      commit('resetProblem');
      payload.units = formulas[payload.problem].initial();
      commit('setCurrentProblem', payload);
      commit('setAnswerSet');
    },
    setCorrectMessage: ({commit},payload) => {
      commit('setCorrectMessage',payload);
    },
    answerQuestion: ({commit},payload) => {
     commit('answerQuestion', payload);
    },
    newProblem: ({commit, state}) => {
      commit('resetProblem');
      state.units = formulas[state.problem].newValues();
      state.correct = formulas[state.problem].correct(state.units);
      state.correctMessage = formulas[state.problem].correctMessage(state.units, state.correct);
      let answerSet = getNewAnswerSet(state.correct);
      commit('setAnswerSet', answerSet);
    }
  }
});