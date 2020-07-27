import Head from 'next/head'

const hotjar = () =>
{__html: `
(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:1920486,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"};`
}


export const Header = () => (
  <Head>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <title>Arya Lingyu Zhao</title>
    <link rel="icon" href="/columbia-university-logo.ico" />  
    
    <script>{hotjar}</script>
    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link> */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap"  />
    <link rel="stylesheet" href = "https://fonts.googleapis.com/icon?family=Material+Icons" />
  </Head>
)
