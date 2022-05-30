import "./App.css"
import React, { useEffect, useState } from "react"
import Loading from "./components/Loading"
import Tours from "./components/Tours"

const url = "https://course-api.com/react-tours-project"

function App() {
  const [loading, setLoading] = useState(true)
  const [tour, settour] = useState([])

  const fetchdata = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tour = await response.json()

      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000)

      settour(tour)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  // if loading xa bhayo bhane
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // remove tour
  const removeTour = (id) => {
    // tour ma bhako data lai filter garda tour.id ko ra id chai match bhayana bhane remove
    const newTour = tour.filter((tour) => tour.id !== id)
    settour(newTour)
  }

  // if tous ma kai xain bhane call garxa feri fetchdata lai referce garda
  if (tour.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={() => fetchdata()} className='btn2'>
          Referce
        </button>
      </main>
    )
  }
  return (
    <>
      {/* loading bhayana bhane */}
      <main>
        <Tours tour={tour} removeTour={removeTour} />
      </main>
    </>
  )
}

export default App
