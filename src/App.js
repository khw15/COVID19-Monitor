import React, { useState, useEffect } from 'react'
import './css/App.css'
import './css/tw.css'
import ReactTimeAgo from 'react-timeago'
import indonesiaString from 'react-timeago/lib/language-strings/id'
import buildFormatter  from 'react-timeago/lib/formatters/buildFormatter'
import Fade from 'react-reveal/Fade'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import {
  Box,
  Bar,
  Footer,
  TombolGrafik,
  Tips,
  Kontak,
  Theme,
} from './components'

import {
  TANGAN,
  DOKTER,
  BERSIN,
  MASKER,
  KESEHATAN,
  NEWS,
  SOCIAL_DISTANCING,
  BENDERA,
  TIME,
  FB,
  TW,
  KUMPUL
} from './images'

import API from './api'

const formatter = buildFormatter(indonesiaString)

const URL_TW_SHARE =
  'https://twitter.com/intent/tweet?url=https%3A%2F%2Fcovid19.i315.my.id&text=Tetap%20update%20dengan%20statistik%20COVID-19%20terbaru%20dari%20jumlah%20pengetesan%20yang%20dilakukan%2C%20kasus%20positif%20dan%20aktif%2C%20angka%20kesembuhan%20dan%20kematian%20di%20Indonesia%20atau%20di%20Dunia.&hashtags=COVID19%2CCORONA'
const URL_FB_SHARE =
  'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid19.i315.my.id/'

  const App = () => {
    // ID
    // Actual Value
    const [testsID, setTestsID] = useState(0)
    const [confirmedID, setConfirmedID] = useState(0)
    const [recoveredID, setRecoveredID] = useState(0)
    const [deathsID, setDeathsID] = useState(0)
    const [activeID, setActiveID] = useState(0)
    const [confirmedTodayID, setConfirmedTodayID] = useState(0)
    const [deathsTodayID, setDeathsTodayID] = useState(0)
    const [todayRecoveredID, setTodayRecoveredID] = useState(0)
    // Percentage
    const [confirmedIDPercent, setConfirmedIDPercent] = useState(0)
    const [deathsIDPercent, setDeathsIDPercent] = useState(0)
    const [recoveredIDPercent, setRecoveredIDPercent] = useState(0)
    const [activeIDPercent, setActiveIDPercent] = useState(0)
    // Visibility
    const [
      confirmedIDPercentVisibility,
      setConfirmedIDPercentVisibility,
    ] = useState(false)
    const [deathsIDPercentVisibility, setDeathsIDPercentVisibility] = useState(
      false
    )
    const [
      recoveredIDPercentVisibility,
      setRecoveredIDPercentVisibility,
    ] = useState(false)
    const [activeIDPercentVisibility, setActiveIDPercentVisibility] = useState(
      false
    )
    // Historical
    const [
      idHistoricalDataConfirmedLabel,
      setIdHistoricalDataConfirmedLabel,
    ] = useState([])
    const [
      idHistoricalDataConfirmedValue,
      setIdHistoricalDataConfirmedValue,
    ] = useState([])
    const [
      idHistoricalDataRecoveredLabel,
      setIdHistoricalDataRecoveredLabel,
    ] = useState([])
    const [
      idHistoricalDataRecoveredValue,
      setIdHistoricalDataRecoveredValue,
    ] = useState([])
    const [
      idHistoricalDataDeathsLabel,
      setIdHistoricalDataDeathsLabel,
    ] = useState([])
    const [
      idHistoricalDataDeathsValue,
      setIdHistoricalDataDeathsValue,
    ] = useState([])
  
    // Global
    const [testsGlobal, setTestsGlobal] = useState(0)
    const [confirmedGlobal, setConfirmedGlobal] = useState(0)
    const [recoveredGlobal, setRecoveredGlobal] = useState(0)
    const [deathsGlobal, setDeathsGlobal] = useState(0)
    const [activeGlobal, setActiveGlobal] = useState(0)
    // Percentage
    const [confirmedGlobalPercent, setConfirmedGlobalPercent] = useState(0)
    const [deathsGlobalPercent, setDeathsGlobalPercent] = useState(0)
    const [recoveredGlobalPercent, setRecoveredGlobalPercent] = useState(0)
    const [activeGlobalPercent, setActiveGlobalPercent] = useState(0)
    // Visibility
    const [confirmedGlobalVisibility, setConfirmedGlobalVisibility] = useState(
      false
    )
    const [deathGlobalVisibility, setDeathGlobalVisibility] = useState(false)
    const [recoveredGlobalVisibility, setRecoveredGlobalVisibility] = useState(
      false
    )
    const [activeGlobalVisibility, setActiveGlobalVisibility] = useState(false)
    // Historical
    const [
      globalHistoricalDataConfirmedLabel,
      setGlobalHistoricalDataConfirmedLabel,
    ] = useState([])
    const [
      globalHistoricalDataConfirmedValue,
      setGlobalHistoricalDataConfirmedValue,
    ] = useState([])
    const [
      globalHistoricalDataRecoveredLabel,
      setGlobalHistoricalDataRecoveredLabel,
    ] = useState([])
    const [
      globalHistoricalDataRecoveredValue,
      setGlobalHistoricalDataRecoveredValue,
    ] = useState([])
    const [
      globalHistoricalDataDeathsLabel,
      setGlobalHistoricalDataDeathsLabel,
    ] = useState([])
    const [
      globalHistoricalDataDeathsValue,
      setGlobalHistoricalDataDeathsValue,
    ] = useState([])
  
    const [countriesAffected, setCountriesAffected] = useState(0)
    const [update, setUpdate] = useState('')
    const [chartID, setChartID] = useState(false)
    const [chartGlobal, setChartGlobal] = useState(false)
    const [updateTimeVisibility, setUpdateTimeVisibility] = useState(false)
  
    const [darkMode, setDarkMode] = useState(false)
  
    const getIDData = async () => {
      if (document.hidden) return
      await API.idDataComplete().then((res) => {
        const hours = new Date(res.lastUpdate).getHours()
  
        // Prevents showing yesteredays data from API
        if (hours >= 12) {
          setConfirmedTodayID(res.todayCases)
          setDeathsTodayID(res.todayDeaths)
          setTodayRecoveredID(res.todayRecovered)
        }
  
        setTestsID(res.tests)
        setConfirmedID(res.confirmed)
        setRecoveredID(res.recovered)
        setDeathsID(res.deaths)
        setActiveID(res.active)
        setConfirmedIDPercent(((res.confirmed / res.tests) * 100).toFixed(2))
        setDeathsIDPercent(((res.deaths / res.confirmed) * 100).toFixed(2))
        setRecoveredIDPercent(((res.recovered / res.confirmed) * 100).toFixed(2))
        setActiveIDPercent(((res.active / res.confirmed) * 100).toFixed(2))
        setUpdate(res.lastUpdate)
        setUpdateTimeVisibility(true)
      })
    }
  
    const getIDDataHistorical = async () => {
      if (document.hidden) return
      await API.idDataHistorical().then((res) => {
        let casesLabel = []
        let casesValue = []
        let recoveredLabel = []
        let recoveredValue = []
        let deathsLabel = []
        let deathsValue = []
  
        Object.entries(res.confirmed).forEach((c) => {
          casesLabel.push(c[0])
          casesValue.push(c[1])
        })
  
        Object.entries(res.recovered).forEach((c) => {
          recoveredLabel.push(c[0])
          recoveredValue.push(c[1])
        })
  
        Object.entries(res.deaths).forEach((c) => {
          deathsLabel.push(c[0])
          deathsValue.push(c[1])
        })
  
        setIdHistoricalDataConfirmedLabel(casesLabel)
        setIdHistoricalDataConfirmedValue(casesValue)
  
        setIdHistoricalDataRecoveredLabel(recoveredLabel)
        setIdHistoricalDataRecoveredValue(recoveredValue)
  
        setIdHistoricalDataDeathsLabel(deathsLabel)
        setIdHistoricalDataDeathsValue(deathsValue)
      })
    }
  
    const getGlobalData = async () => {
      if (document.hidden) return
      await API.globalDataComplete().then((res) => {
        setTestsGlobal(res.tests)
        setConfirmedGlobal(res.confirmed)
        setRecoveredGlobal(res.recovered)
        setDeathsGlobal(res.deaths)
        setActiveGlobal(res.confirmed - (res.recovered + res.deaths))
        setConfirmedGlobalPercent(((res.confirmed / res.tests) * 100).toFixed(2))
        setDeathsGlobalPercent(((res.deaths / res.confirmed) * 100).toFixed(2))
        setRecoveredGlobalPercent(
          ((res.recovered / res.confirmed) * 100).toFixed(2)
        )
        setActiveGlobalPercent(
          (100 - ((res.recovered + res.deaths) / res.confirmed) * 100).toFixed(2)
        )
        setCountriesAffected(res.affectedCountries)
      })
    }
  
    const getGlobalDataHistorical = async () => {
      if (document.hidden) return
      await API.globalDataHistorical().then((res) => {
        let casesLabel = []
        let casesValue = []
        let recoveredLabel = []
        let recoveredValue = []
        let deathsLabel = []
        let deathsValue = []
  
        Object.entries(res.confirmed).forEach((c) => {
          casesLabel.push(c[0])
          casesValue.push(c[1])
        })
  
        Object.entries(res.recovered).forEach((c) => {
          recoveredLabel.push(c[0])
          recoveredValue.push(c[1])
        })
  
        Object.entries(res.deaths).forEach((c) => {
          deathsLabel.push(c[0])
          deathsValue.push(c[1])
        })
  
        setGlobalHistoricalDataConfirmedLabel(casesLabel)
        setGlobalHistoricalDataConfirmedValue(casesValue)
  
        setGlobalHistoricalDataRecoveredLabel(recoveredLabel)
        setGlobalHistoricalDataRecoveredValue(recoveredValue)
  
        setGlobalHistoricalDataDeathsLabel(deathsLabel)
        setGlobalHistoricalDataDeathsValue(deathsValue)
      })
    }
  
    useEffect(() => {
      const localHours = new Date().getHours()
      setDarkMode(!(localHours >= 5 && localHours <= 17))
  
      getIDData()
      setInterval(getIDData, 300000)
      getIDDataHistorical()
      getGlobalData()
      setInterval(getGlobalData, 300000)
      getGlobalDataHistorical()
    }, [])
  
    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Bar />
  
        <Theme darkMode={darkMode} setDarkMode={setDarkMode} />
  
        <div className="share fixed right-0">
          <a href={URL_FB_SHARE} rel="noopener noreferrer" className="block pb-2 px-4" target="_blank">
            <img src={FB} alt="Bagikan ke Facebook" width="30" />
          </a>
          <a href={URL_TW_SHARE} rel="noopener noreferrer" className="block pb-2 px-4" target="_blank">
            <img src={TW} alt="Bagikan ke Twitter" width="30" />
          </a>
        </div>
  
        <h2 className="text-5xl p-5 font-hairline noselect ind">
          Indonesia{' '}
          <img src={BENDERA} width="70" className="inline mb-1" alt="" />
        </h2>
        <h3 className="w-11/12 lg:w-5/6 mx-auto text-2xl p-2 clearfix text-left noselect">
          <span className="md:float-left text-left">
            Hari ini
            <sup className="text-xs text-gray-500 ml-2">
              {update && new Date(update).toLocaleDateString()}
            </sup>
          </span>
          <p
            className={`md:float-right text-sm mt-2 text-gray-500 ${
              !updateTimeVisibility && 'hidden'
            }`}
          >
            <img
              src={TIME}
              width="16"
              alt="Clock"
              className="inline clock mr-1"
            />{' '}
          Diperbarui <ReactTimeAgo date={update} live={false} formatter={formatter} />{' '}
        </p>
      </h3>
      <div className="body w-11/12 lg:w-5/6 mx-auto clearfix">
        <Box
          classNameCount="text-3xl md:text-4xl leading-normal block"
          title="Positif"
          count={confirmedTodayID}
          delay={100}
        />

        <Box
          classNameCount="text-3xl md:text-4xl leading-normal block text-green-700"
          title="Sembuh"
          count={todayRecoveredID}
          delay={200}
        />

        <Box
          classNameCount="text-3xl md:text-4xl leading-normal block text-red-600"
          title="Meninggal Dunia"
          count={deathsTodayID}
          delay={200}
        />

      </div>
      <p className="w-11/12 lg:w-5/6 mt-2 mx-auto px-2 italic text-xs text-left mb-4 text-gray-500 leading-normal noselect">
        * Catatan: Angka 0 menunjukkan belum adanya laporan dari Kementerian Kesehatan
        Republik Indonesia pada hari ini atau keterlambatan pembaruan data atau tidak 
        adanya koneksi internet
      </p>
      <h3 className="w-11/12 lg:w-5/6 mx-auto text-2xl p-2 text-left noselect">
        Total
        <sup className="text-xs text-gray-500 ml-2">
          Sejak kasus pertama COVID-19 di Indonesia dikonfirmasi
        </sup>
      </h3>
      <div className="body w-11/12 lg:w-5/6 mx-auto clearfix">
        <Box
          classNameCount="text-3xl md:text-4xl leading-normal block text-blue-700"
          title="Tes Dilakukan"
          count={testsID}
          delay={50}
        />

        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block"
          title="Positif"
          count={confirmedID}
          onEnd={() => setConfirmedIDPercentVisibility(true)}
          percentVisibility={
            confirmedIDPercentVisibility ? 'text-sm text-gray-600' : 'invisible'
          }
          percentValue={confirmedIDPercent}
          delay={100}
          help={`Dari ${testsID.toLocaleString()} tes yang dilakukan ${confirmedIDPercent}% positif COVID-19`}
          helpBg="bg-white"
          helpBorder="border-gray-600"
        />

        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block text-green-700"
          title="Sembuh"
          count={recoveredID}
          onEnd={() => setRecoveredIDPercentVisibility(true)}
          percentVisibility={
            recoveredIDPercentVisibility ? 'text-sm text-gray-600' : 'invisible'
          }
          percentValue={recoveredIDPercent}
          delay={150}
          help={`Dari ${confirmedID.toLocaleString()} kasus positif COVID-19 ${recoveredIDPercent}% sembuh`}
          helpBg="bg-green-100"
          helpBorder="border-green-500"
        />

        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block text-yellow-600"
          title="Dalam Perawatan"
          count={activeID}
          onEnd={() => setActiveIDPercentVisibility(true)}
          percentVisibility={
            activeIDPercentVisibility ? 'text-sm text-gray-600' : 'invisible'
          }
          percentValue={activeIDPercent}
          delay={250}
          help={`Dari ${confirmedID.toLocaleString()} kasus positif COVID-19 ${activeIDPercent}% dalam perawatan`}
          helpBg="bg-yellow-100"
          helpBorder="border-yellow-500"
        />

        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block text-red-600"
          title="Meninggal Dunia"
          count={deathsID}
          onEnd={() => setDeathsIDPercentVisibility(true)}
          percentVisibility={
            deathsIDPercentVisibility ? 'text-sm text-gray-600' : 'invisible'
          }
          percentValue={deathsIDPercent}
          delay={200}
          help={`Dari ${confirmedID.toLocaleString()} kasus positif COVID-19 ${deathsIDPercent}% meninggal dunia`}
          helpBg="bg-red-100"
          helpBorder="border-red-500"
        />
      </div>

      <TombolGrafik
        clickFn={() => setChartID(!chartID)}
        chartVisible={chartID}
        barLabel={[
          'Tes Dilakukan',
          'Positif',
          'Sembuh',
          'Meninggal Dunia',
          'Dalam perawatan',
        ]}
        barDataColor={['#2b6cb0', '#afb6c1', '#52a571', '#e53e3e', '#d69e2e']}
        barDataValue={[testsID, confirmedID, recoveredID, deathsID, activeID]}
        lineCasesLabel={idHistoricalDataConfirmedLabel}
        lineCasesValue={idHistoricalDataConfirmedValue}
        lineRecoveredLabel={idHistoricalDataRecoveredLabel}
        lineRecoveredValue={idHistoricalDataRecoveredValue}
        lineDeathsLabel={idHistoricalDataDeathsLabel}
        lineDeathsValue={idHistoricalDataDeathsValue}
      />

      <h2 className="text-5xl mt-5 mb-2 font-hairline noselect">
        Dunia
      </h2>
      <div className="body w-11/12 lg:w-5/6 mx-auto clearfix">
        <Box
          classNameCount="text-3xl md:text-4xl leading-normal block text-blue-700"
          title="Tes dilakukan"
          count={testsGlobal}
          delay={50}
        />
        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block"
          title="Positif"
          count={confirmedGlobal}
          onEnd={() => setConfirmedGlobalVisibility(true)}
          percentVisibility={
            confirmedGlobalVisibility ? 'text-xs text-gray-600' : 'invisible'
          }
          percentValue={confirmedGlobalPercent}
          delay={100}
          help={`Dari ${testsGlobal.toLocaleString()} tes yang dilakukan ${confirmedGlobalPercent}% positif COVID-19`}
        />

        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block text-yellow-600"
          title="Dalam Perawatan"
          count={activeGlobal}
          onEnd={() => setActiveGlobalVisibility(true)}
          percentVisibility={
            activeGlobalVisibility ? 'text-xs text-gray-600' : 'invisible'
          }
          percentValue={activeGlobalPercent}
          delay={250}
          help={`Dari ${confirmedGlobal.toLocaleString()} kasus positif COVID-19 ${activeGlobalPercent}% dalam perawatan`}
          helpBg="bg-yellow-100"
          helpBorder="border-yellow-500"
        />

        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block text-green-700"
          title="Sembuh"
          count={recoveredGlobal}
          onEnd={() => setRecoveredGlobalVisibility(true)}
          percentVisibility={
            recoveredGlobalVisibility ? 'text-xs text-gray-600' : 'invisible'
          }
          percentValue={recoveredGlobalPercent}
          delay={150}
          help={`Dari ${confirmedGlobal.toLocaleString()} kasus positif COVID-19 ${recoveredGlobalPercent}% sembuh`}
          helpBg="bg-green-100"
          helpBorder="border-green-500"
        />

        <Box
          hasPercent
          classNameCount="text-3xl md:text-4xl leading-normal block text-red-600"
          title="Meninggal Dunia"
          count={deathsGlobal}
          onEnd={() => setDeathGlobalVisibility(true)}
          percentVisibility={
            deathGlobalVisibility ? 'text-xs text-gray-600' : 'invisible'
          }
          percentValue={deathsGlobalPercent}
          delay={200}
          help={`Dari ${confirmedGlobal.toLocaleString()} kasus positif COVID-19 ${deathsGlobalPercent}% meninggal dunia`}
          helpBg="bg-red-100"
          helpBorder="border-red-500"
        />

        <Box
          classNameCount="text-3xl md:text-4xl leading-normal block text-indigo-600"
          title="Negara yang Terinfeksi"
          count={countriesAffected}
          delay={300}
        />
      </div>

      <TombolGrafik
        clickFn={() => setChartGlobal(!chartGlobal)}
        chartVisible={chartGlobal}
        barLabel={[
          'Tes Dilakukan',
          'Positif',
          'Sembuh',
          'Meninggal Dunia',
          'Dalam Perawatan',
        ]}
        barDataColor={['#2b6cb0', '#afb6c1', '#52a571', '#e53e3e', '#d69e2e']}
        barDataValue={[
          testsGlobal,
          confirmedGlobal,
          recoveredGlobal,
          deathsGlobal,
          activeGlobal,
        ]}
        lineCasesLabel={globalHistoricalDataConfirmedLabel}
        lineCasesValue={globalHistoricalDataConfirmedValue}
        lineRecoveredLabel={globalHistoricalDataRecoveredLabel}
        lineRecoveredValue={globalHistoricalDataRecoveredValue}
        lineDeathsLabel={globalHistoricalDataDeathsLabel}
        lineDeathsValue={globalHistoricalDataDeathsValue}
      />

      <h2 className="md:w-2/3 py-4 mt-4 mx-auto text-2xl noselect">
        Perlindungan dan Pencegahan
      </h2>
      <div className="md:w-2/3 text-left p-6 py-8 mx-4 md:mx-auto shadow bg-white rounded-lg">
        <Tips
          image={TANGAN}
          title="Cuci tangan Anda sesering mungkin"
          description="Seringlah mencuci tangan Anda dengan air bersih mengalir dan sabun, atau 
          cairan antiseptik berbahan dasar alkohol. Mengapa? Mencuci tangan dengan air bersih 
          yang mengalir dan sabun, atau cairan antiseptik berbahan dasar alkohol dapat membunuh 
          virus di tangan Anda."
        />
        <Tips
          image={SOCIAL_DISTANCING}
          title="Jaga jarak setidaknya 2 meter dengan orang lain"
          description="Ketika seseorang 
          batuk, bersin, atau bicara, orang tersebut mengeluarkan percikan dari hidung atau mulutnya 
          dan percikan ini dapat membawa virus. Jika Anda terlalu dekat, Anda dapat menghirup percikan 
          ini dan juga virus COVID-19 jika orang tersebut terinfeksi penyakit ini."
        />
        <Tips
          image={KUMPUL}
          title="Hindari pergi ke tempat-tempat ramai"
          description="Ketika orang-orang berkumpul bersama dalam kerumunan, Anda memiliki kemungkinan
           untuk melakukan kontak erat dengan orang yang terinfeksi COVID-19 dan lebih sulit untuk 
           menjaga jarak fisik minimal 2 meter."
        />
        <Tips
          image={DOKTER}
          title="Hindari menyentuh wajah, hidung, mulut, atau mata"
          description="Tangan menyentuh berbagai 
          permukaan benda dan virus penyakit ini dapat tertempel di tangan. Tangan yang terkontaminasi 
          dapat membawa virus ini ke mata, hidung, atau mulut, yang dapat menjadi titik masuk virus ini 
          ke tubuh Anda sehingga Anda menjadi sakit."
        />
        <Tips
          image={BERSIN}
          title="Terapkan etika batuk dan bersin"
          description="Pastikan Anda dan orang-orang di sekitar Anda menjalankan etika batuk dan bersin 
          dengan cara menutup mulut dan hidung dengan siku terlipat atau tisu saat batuk atau bersin, segera 
          buang tisu bekas tersebut. Mengapa? Percikan dapat menyebarkan virus. Dengan mengikuti etika batuk 
          dan bersin, Anda melindungi orang-orang di sekitar dari virus-virus seperti batuk pilek, flu, dan COVID-19."
        />
         <Tips
          image={MASKER}
          title="Kenakan masker"
          description="Pastikan Anda dan orang-orang di sekitar Anda mengenakan masker. Mengapa? Percikan dapat 
          menyebarkan virus saat Anda atau orang-orang di sekitar Anda batuk atau bersin. Pakai masker kain 
          yang direkomendasikan oleh Kementerian Kesehatan, 
          karena masker medis hanya untuk tenaga medis yang melakukan kontak langsung dengan pasien dalam pengawasan atau 
          pasien positif COVID-19."
        />
        <Tips
          image={KESEHATAN}
          title="Jika Anda kurang sehat, segeralah cari pertolongan medis"
          description="Jika Anda demam, batuk, dan kesulitan bernapas, segeralah cari pertolongan medis dan 
          tetap memberitahukan kondisi Anda terlebih dahulu. Ikuti arahan dinas kesehatan setempat Anda.
          Mengapa? Kementerian kesehatan dan dinas kesehatan daerah memiliki informasi terbaru tentang 
          situasi di wilayah Anda. Dengan memberitahukan kondisi Anda terlebih dahulu, petugas kesehatan 
          yang akan merawat Anda dapat segera mengarahkan Anda ke fasilitas pelayanan kesehatan yang tepat. 
          Langkah ini juga melindungi Anda dan membantu mencegah penyebaran virus dan infeksi lainnya."
        />
        <Tips
          image={NEWS}
          title="Tetap mengikuti berita dari sumber terpercaya"
          description="Tetap ikuti informasi terbaru dari sumber terpercaya, seperti WHO, dinas kesehatan daerah, 
          dan kementerian kesehatan. Mengapa? Dinas kesehatan daerah dan kementerian kesehatan adalah sumber 
          terpercaya dalam memberikan arahan kepada masyarakat di wilayahnya tentang apa saja yang harus 
          dilakukan untuk melindungi diri."
          last
        />
      </div>

      <p className="text-xs text-right text-gray-500 italic md:w-2/3 py-4 mx-auto pr-4 md:pr-0 noselect">
        Sumber{' '}
        <a href="https://www.who.int/indonesia/news/novel-coronavirus/qa-for-public"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
        situs web WHO
        </a>
      </p>

      <h2 className="md:w-2/3 py-4 mt-4 mx-auto text-2xl noselect">
        Gejala yang Ditimbulkan oleh COVID-19
      </h2>
      <div className="md:w-2/3 text-left p-6 py-8 mx-4 md:mx-auto shadow bg-white rounded-lg">
        <p>Orang yang terinfeksi COVID-19 memiliki berbagai gejala yang dilaporkan &#8211; mulai dari 
          gejala ringan hingga parah. Gejala dapat muncul 2-14 hari setelah terpapar 
          virus. Orang dengan gejala di bawah ini mungkin terinfeksi COVID-19:</p>
        <ul>
          <li>Demam</li>
          <li>Batuk</li>
          <li>Kesulitan bernafas</li>
          <li>Merasa letih</li>
          <li>Nyeri otot</li>
          <li>Kehilangan indera penciuman</li>
          <li>Sakit kepala</li>
          <li>Hidung tersumbat atau berair</li>
          <li>Sakit tenggorokan</li>
          <li>Mual</li>
          <li>Diare</li>
        </ul>
        Jenis <i>coronavirus</i> yang lain bisa menyebabkan gejala yang lebih serius. 
        Infeksi ini dapat mengarah ke bronkitis dan pneumonia, yang menyebabkan gejala 
        seperti:
        <ul>
          <li>Demam, yang akan cukup tinggi jika Anda mengidap pneumonia</li>
          <li>Batuk berdahak</li>
          <li>Napas pendek</li>
          <li>Sakit dada ketika Anda bernapas atau batuk</li>
        </ul>
      </div>

      <p className="text-xs text-right text-gray-500 italic md:w-2/3 py-4 mx-auto pr-4 md:pr-0 noselect">
        Sumber{' '}
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
        situs web CDC
        </a>{' '}dan{' '}
        <a href="https://fk.unair.ac.id/mengenal-apa-itu-virus-corona/"
        target="_blank"
        rel="noopener noreferrer"
        >
        F. Kedokteran Unair
        </a>
      </p>

      <h2 className="md:w-2/3 py-4 mt-4 mx-auto text-2xl noselect">
        Apa yang Dimaksud Dengan COVID-19?
      </h2>
      <div className="md:w-2/3 text-left p-6 py-8 mx-4 md:mx-auto shadow bg-white rounded-lg">
        <p>
          Virus korona adalah sebutan untuk jenis virus yang dapat menyebabkan penyakit pada 
          hewan dan manusia. Disebut korona karena bentuknya yang seperti mahkota 
          (korona ~ <i>crown</i> = mahkota dalam bahasa Latin). 
          <br /><br />
          Beberapa contoh penyakit pada manusia yang disebabkan oleh virus korona antara 
          lain MERS (Sindrom Pernafasan Timur Tengah) dan SARS (Sindrom Pernafasan Akut 
          Parah). 
          <br /><br />
          Virus korona terbaru yang ditemukan yang ditemukan di Wuhan, Tiongkok, pada bulan 
          Desember 2019 diberi nama <i>SARS Coronavirus</i> 2 (SARS-CoV-2) dan menyebabkan penyakit{' '} 
          <i>Coronavirus Disease</i> 2019 (COVID-19).
        </p>
      </div>

      <p className="text-xs text-right text-gray-500 italic md:w-2/3 py-4 mx-auto pr-4 md:pr-0">
        Sumber{' '}
        <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
        situs web WHO
        </a>
      </p>

      <h2 className="md:w-2/3 py-4 mt-4 mx-auto text-2xl noselect">
        Bagaimana COVID-19 menular?
      </h2>
      <div className="md:w-2/3 text-left p-6 py-8 mx-4 md:mx-auto shadow bg-white rounded-lg">
        <p>
          Penularan terjadi melalui <i><b>droplet</b></i> (butir-butir tetesan cairan) dari hidung atau mulut 
          yang menyebar saat pembawa virus COVID-19 batuk, bersin atau meler. Tetesan cairan 
          tersebut akan menempel pada benda atau permukaan di sekitarnya. Dan kemudian masuk ke 
          mulut, hidung atau mata. Atau menyentuh permukaan bekas terkena butir cairannya dengan 
          tangan lalu tangan mengusap mulut, hidung atau mata. Inilah alasan pentingnya sering-
          sering cuci tangan dan jangan menyentuh muka dengan tangan.
          <br /><br />
          Orang sehat dapat tertular saat tangan mereka menyentuh permukaan yang terkena tetesan 
          tersebut dan kemudian tanpa sadar menyentuh mata, mulut, ataupun hidung (selaput lendir). 
          Virus juga bisa masuk saat orang sehat secara tidak sengaja menghirup tetesan cairan saat 
          si pembawa virus batuk atau bersin.
        </p>
      </div>

      <p className="text-xs text-right text-gray-500 italic md:w-2/3 py-4 mx-auto pr-4 md:pr-0 noselect">
        Sumber{' '}
        <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
        situs web WHO
        </a>
      </p>

      <h2 className="md:w-2/3 py-4 px-2 mt-4 mx-auto text-2xl noselect">
        Kontak Layanan Kementerian/Lembaga untuk COVID-19
      </h2>

      <div className="px-2 mt-4">
        <Fade delay={50}>
          <Kontak />
        </Fade>
      </div>

      <h2 className="md:w-2/3 py-4 px-2 mt-10 mx-auto text-2xl noselect">
        Dapatkan Informasi Terbaru COVID-19 di Indonesia
      </h2>
      <div className="tweets p-4 md:flex md:justify-around mx-auto noselect" translate="no">
        <Fade delay={50}>
          <div
            className={`tweet w-5/6 md:w-1/3 lg:w-1/4 mx-auto md:mx-2 mb-4 md:mb-0 shadow ${
              darkMode ? 'hidden' : ''
            }`}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="KemenkesRI"
              chrome="noscrollbar nofooter"
              options={{ height: 500 }}
              lang="id"
            />
          </div>
          <div
            className={`tweet w-5/6 md:w-1/3 lg:w-1/4 mx-auto md:mx-2 mb-4 md:mb-0 shadow ${
              darkMode ? '' : 'hidden'
            }`}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="KemenkesRI"
              chrome="noscrollbar nofooter"
              options={{ height: 500 }}
              theme="dark"
              lang="id"
            />
          </div>
        </Fade>
        <Fade delay={150}>
          <div
            className={`tweet w-5/6 md:w-1/3 lg:w-1/4 mx-auto md:mx-2 mb-4 md:mb-0 shadow ${
              darkMode ? 'hidden' : ''
            }`}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="BNPB_Indonesia"
              chrome="noscrollbar nofooter"
              options={{ height: 500 }}
              lang="id"
            />
          </div>
          <div
            className={`tweet w-5/6 md:w-1/3 lg:w-1/4 mx-auto md:mx-2 mb-4 md:mb-0 shadow ${
              darkMode ? '' : 'hidden'
            }`}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="BNPB_Indonesia"
              chrome="noscrollbar nofooter"
              options={{ height: 500 }}
              theme="dark"
              lang="id"
            />
          </div>
        </Fade>
        <Fade delay={200}>
          <div
            className={`tweet w-5/6 md:w-1/3 lg:w-1/4 mx-auto md:mx-2 mb-4 md:mb-0 shadow ${
              darkMode ? 'hidden' : ''
            }`}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="KawalCOVID19"
              chrome="noscrollbar nofooter"
              options={{ height: 500 }}
              lang="id"
            />
          </div>
          <div
            className={`tweet w-5/6 md:w-1/3 lg:w-1/4 mx-auto md:mx-2 mb-4 md:mb-0 shadow ${
              darkMode ? '' : 'hidden'
            }`}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="KawalCOVID19"
              chrome="noscrollbar nofooter"
              options={{ height: 500 }}
              theme="dark"
              lang="id"
            />
          </div>
        </Fade>
      </div>

      <div className="mt-10 md:mt-10 text-3xl" translate="no">
        #PakaiMasker{' '}
        <span role="img" aria-label="home">
          😷
        </span>
        <br />
        Indonesia Bisa!{' '}
        <span role="img" aria-label="strong">
          💪
        </span>
      </div>

      <Footer />
    </div>
  )
}

export default App
