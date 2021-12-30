import * as React from "react"
import Layout from '../components/layout'
import Details from '../components/details'

const IndexPage = () => {
  return (
    
    <Layout>
      <div className="md:grid md:justify-center md:grid-cols-3 md:ml-tab-sides md:mr-tab-sides">
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      <Details prjName='Project Name' prjImage='img-holder.png'/>
      </div>
    </Layout>
  )
}

export default IndexPage
