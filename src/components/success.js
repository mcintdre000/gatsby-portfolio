import React from 'react'
import Helmet from 'react-helmet'

const Success = (props) => (
    <div>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div>
            <h1>Thank you!</h1>
            <p>This is a custom thank you page for form submissions</p>
        </div>
    </div>
)

export default Success