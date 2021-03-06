const dailyResumeByKey = (data, key, label, color = 'bg-grey-700') => {
  const last = data.length - 1
  if (data[last]) {
    return {
      today: data[last][key],
      variation: data[last][key] - data[last - 1][key],
      color,
      label
    }
  }
  return {
    today: 0,
    variation: 0,
    color,
    label
  }
}

const lastUpdate = (data) => {
  if (data.length) {
    const last = data.length - 1
    const newDate = new Date(data[last].data)
    return newDate.toLocaleDateString()
  }
  return new Date()
}

const dailyResume = (data) => {
  return {
    totali: dailyResumeByKey(data, 'totale_casi', 'Totale'),
    decessi: dailyResumeByKey(data, 'deceduti', 'Decessi'),
    terapia_intensiva: dailyResumeByKey(
      data,
      'terapia_intensiva',
      'Terapia Intensiva'
    ),
    ricoverati_con_sintomi: dailyResumeByKey(
      data,
      'ricoverati_con_sintomi',
      'Ricoverati'
    ),
    dimessi: dailyResumeByKey(data, 'dimessi_guariti', 'Guariti'),
    isolamento: dailyResumeByKey(
      data,
      'isolamento_domiciliare',
      'Isolamento domiciliare'
    )
  }
}

const dailyResumeProvincia = (data) => {
  return {
    totali: dailyResumeByKey(data, 'totale_casi', 'Totale')
  }
}

const dailyResumeByRegion = (code, data) => {
  const regionData = data.filter((item) => item.codice_regione === code)
  return dailyResume(regionData)
}

const dailyResumeByProvince = (code, data) => {
  const provinceData = data.filter((item) => {
    return item.codice_provincia === code
  })
  return dailyResumeProvincia(provinceData)
}

export {
  lastUpdate,
  dailyResume,
  dailyResumeByKey,
  dailyResumeByRegion,
  dailyResumeByProvince
}
