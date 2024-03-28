import React from 'react'
import Layout from '../component/Layout'
import tick from '../assets/images/icon-thank-you.svg'
const Success = () => {
  return (
    <Layout>
        <div className='c'>
        <div className='d-flex  h-100 flex-column justify-content-center  gap-3'>
            <div className='text-center'>
                <img src={tick} alt="" />
            </div>
            <h2 className='text-center'>Thank You!</h2>
            <p className='text-center'>Thanks for confirming your subscription! We hope you have fun using out platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
        </div>
    </Layout>
  )
}

export default Success