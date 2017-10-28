import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import Axios from 'axios';

export default new Vuex.Store({
    state: {
        currentYear: 2017,
        currentMonth: 10,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            { description: 'random event 1', date: moment('2017-10-02', 'YYYY-MM-DD') },
            { description: 'random event 2', date: moment('2017-10-22', 'YYYY-MM-DD') },
            { description: 'random event 3', date: moment('2017-11-22', 'YYYY-MM-DD') },
        ],
        eventFormDate: moment(),
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push(payload);
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    },
    actions: {
        addEvent(context, payload) {
            return new Promise((resolve, reject) => {
                let obj = {
                    description: payload,
                    date: context.state.eventFormDate,
                };

                Axios.post('/add_event', obj).then(response => {
                    if (response.status === 200) {
                        context.commit('addEvent', obj);
                        setTimeout(function() {
                            resolve();
                        }, 2000);
                    } else {
                        reject();
                    }
                });
            });
        }
    }
})







