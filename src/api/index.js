const NinjaUrl = "https://disease.sh/v3/covid-19/";

export const idData = async () => {
    try {
      const data = await fetch(
        `${NinjaUrl}countries/Indonesia/`
      ).then((res) => res.json())
      return {
        confirmed: data.todayCases,
        recovered: data.todayRecovered,
        deaths: data.todayDeaths,
        lastUpdate: data.updated,
      }
    } catch (e) {
      console.log(e)
    }
  }

  export const globalData = async () => {
    try {
      const data = await fetch(`${NinjaUrl}all`).then((res) =>
        res.json()
      )
      return {
        confirmed: data.todayCases,
        recovered: data.todayRecovered,
        deaths: data.todayDeaths,
        lastUpdate: data.updated,
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  export const idDataComplete = async () => {
    try {
      const data = await fetch(
        `${NinjaUrl}countries/Indonesia`
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
        `${NinjaUrl}historical/Indonesia?lastdays=all`
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
        `${NinjaUrl}all`
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
        `${NinjaUrl}historical/all?lastdays=all`
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