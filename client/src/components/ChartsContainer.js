import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'
import BarChartComponent from './BarChart'
import AreaChartComponent from './AreaChart'
import { useState } from 'react'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState()
  const {monthlyApplications: data} = useAppContext()

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={()=>setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChartComponent data={data} /> :  <AreaChartComponent data={data} />}
    </Wrapper>

  )
}

export default ChartsContainer