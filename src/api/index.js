const MathdroidUrl = "https://covid19.mathdro.id/api/";
const NinjaUrl = "https://corona.lmao.ninja/v2/";

export const idData = async () => {
    try {
      const data = await fetch(
        `${MathdroidUrl}countries/id/`
      ).then((res) => res.json())
      return {
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastUpdate: data.lastUpdate,
      }
    } catch (e) {
      console.log(e)
    }
  }

  export const globalData = async () => {
    try {
      const data = await fetch(`${MathdroidUrl}`).then((res) =>
        res.json()
      )
      return {
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastUpdate: data.lastUpdate,
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  export const idDataComplete = async () => {
    try {
      const data = await fetch(
        `${NinjaUrl}countries/id`
      ).then((res) => res.json())
      return {
        confirmed: data.cases,
        recovered: data.recovered,
        deaths: data.deaths,
        active: data.active,
        todayCases: data.todayCases,
        todayDeaths: data.todayDeaths,
        todayRecovered: data.todayRecovered,
        tests: data.tests,
        lastUpdate: data.updated,
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  export const idDataHistorical = async () => {
    try {
      const data = await fetch(
        `${NinjaUrl}historical/id?lastdays=14`
      ).then((res) => res.json())
      return {
        confirmed: data.timeline.cases,
        recovered: data.timeline.recovered,
        deaths: data.timeline.deaths,
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  export const globalDataComplete = async () => {
    try {
      const data = await fetch(
        `${NinjaUrl}all?lastdays=14`
      ).then((res) => res.json())
      return {
        confirmed: data.cases,
        recovered: data.recovered,
        deaths: data.deaths,
        active: data.active,
        todayCases: data.todayCases,
        todayDeaths: data.todayDeaths,
        tests: data.tests,
        lastUpdate: data.updated,
        affectedCountries: data.affectedCountries,
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  export const globalDataHistorical = async () => {
    try {
      const data = await fetch(
        `${NinjaUrl}historical/all?lastdays=14`
      ).then((res) => res.json())
      return {
        confirmed: data.cases,
        recovered: data.recovered,
        deaths: data.deaths,
      }
    } catch (e) {
      console.log(e)
    }
  }

export default {
    idData,
    globalData,
    idDataComplete,
    idDataHistorical,
    globalDataComplete,
    globalDataHistorical
};