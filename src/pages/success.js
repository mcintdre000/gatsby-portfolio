import React from 'react'
import { Link } from "gatsby";
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Success = (props) => (
    <Layout>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div>
            <h1>Thank you!</h1>
            <p>Please allow a 24 hour period for responses</p>
            <Link to="/"><h4>Home</h4></Link>
        </div>
    </Layout>
)

export default Success