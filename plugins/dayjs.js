import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (date, format = 'MMMM DD, YYYY') => {
    return dayjs(date).format(format)
})