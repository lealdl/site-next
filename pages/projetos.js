import Head from 'next/head';
import Script from 'next/script';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Projetos({ data }) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <html lang="pt-BR"></html>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Clinihard- Clinihard Sistemas" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Clinihard Sistemas</title>
            </Head>
            <Menu />
            {console.log(data)};
            

           

            <section className="services">
                <div className="max-width">
                    <h2 className="title">Projetos</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className={data.dataHome.ser_icon_one}></i>
                                <div className="text">App Chamados</div>
                                <img src="/app_chamados.png" alt="Sobre Empresa" />
                                <p>Aplicativo para pequenas oficinas de manutenção de computadores.</p>
                            </div>
                        </div>

                        <div className="card">
                        
                            <div className="box">
                            
                                <i className={data.dataHome.ser_icon_two}></i>
                                
                                <div className="text">Sistema Web Chamados</div>
                                <img src="/chamados_web.png" alt="Sobre Empresa" />
                                <p>O cliente realiza um chamado pelo site e o mesmo é enviado para um servidor.</p>
                            </div>
                        </div>

                        <div className="card">

                            <div className="box">
                                <i className={data.dataHome.ser_icon_three}></i>
                                <div className="text">{data.dataHome.ser_title_three}</div>
                                <img src="/llrh.png" alt="Sobre Empresa" />
                                <p>{data.dataHome.ser_desc_three}</p>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </section>

            

            <Footer data={data.dataFooter} />

            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />

            <Script src="custom.js" strategy="afterInteractive" />
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch(`https://luciano1925.c37.integrator.host/view-home`);
    //const response = await fetch(`http://ch-coder.ddns.net:8090/view-home`);
    const data = await response.json();
    //console.log(data);

    return { props: { data } };
}

export default Projetos;