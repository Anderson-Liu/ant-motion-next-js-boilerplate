import Head from 'next/head'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US'

export default ({ children }) => (
    <LocaleProvider locale={enUS}>
        <div style={{marginTop: 100}}>
            <Head>
                {/*<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />*/}
            </Head>
            <style jsx global>{`
       body {
       }
     `}</style>
            {children}
        </div>
    </LocaleProvider>
)
