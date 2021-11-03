// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="HomePage">
        <p>this is my about page</p>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage