import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Chamados({ data }) {

    const [content, setContent] = useState({
        nome: '',
        whatsapp: '',
        endereco: '',
        equipamento: '',
        marca: '',
        modelo: '',
        defeito: '',
        fechado: 'NÃO',
        tecnico: ''
    });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        mensagem: ''
    })

    const onChangeInput = e => setContent({ ...content, [e.target.name]: e.target.value });

    const sendContact = async e => {
        e.preventDefault();

        setResponse({ formSave: true });

        try {
            const res = await fetch('https://luciano1925.c37.integrator.host/add-chamado', {
                method: 'POST',
                body: JSON.stringify(content),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();

            if (responseEnv.erro) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    mensagem: responseEnv.mensagem
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    mensagem: responseEnv.mensagem
                });
                setContent({

                    nome: '',
                    whatsapp: '',
                    endereco: '',
                    equipamento: '',
                    marca: '',
                    modelo: '',
                    defeito: '',
                    fechado: '',
                    tecnico: ''
                })
            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                mensagem: "Erro: Chamado não enviado!"
            });
        }
    }
    const [equipamento, setEquipamento] = useState(0);


    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <html lang="pt-BR"></html>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Contato com a empresa ..." />
                <meta name="author" content="Clinihard - Clinihard Sistemas" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Chamados - Clinihard Sistemas</title>
            </Head>
            <Menu />

            <section className="chamados">
                <div className="max-width">
                    <h2 className="title">{data.dataChamados.title_chamados}</h2>
                    <div className="chamados-content">
                        <div className="column left">
                        <img src="/app_chamados.png" alt="Sobre Empresa" />
                            <p>{data.dataChamados.desc_chamados}</p>
                            <div className="icons">
                                <div className="row">
                                    <i className={data.dataChamados.icon_company}></i>
                                    <div className="info">
                                        <div className="head">
                                            {data.dataChamados.title_company}
                                        </div>
                                        <div className="sub-title">
                                            {data.dataChamados.desc_company}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <i className={data.dataChamados.icon_address}></i>
                                    <div className="info">
                                        <div className="head">
                                            {data.dataChamados.title_address}
                                        </div>
                                        <div className="sub-title">
                                            {data.dataChamados.desc_address}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <i className={data.dataChamados.icon_email}></i>
                                    <div className="info">
                                        <div className="head">
                                            {data.dataChamados.title_email}
                                        </div>
                                        <div className="sub-title">
                                            {data.dataChamados.desc_email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">
                                {data.dataChamados.title_form}
                            </div>

                            {response.type === 'error' ? <p className="alert-danger">{response.mensagem}</p> : ""}
                            {response.type === 'success' ? <p className="alert-success">{response.mensagem}</p> : ""}

                            <form onSubmit={sendContact}>
                                <div className="select-tipo">
                                    <label className="sub-title">Equipamento: </label>
                                    <select name="equipamento" onChange={onChangeInput} value={content.equipamento}>

                                        <option className='select-tipo' value="" >Tipo de Equipamento</option>
                                        <option value="Desktop">Desktop</option>
                                        <option value="Notebook">Notebook</option>
                                        <option value="Outro">Outro</option>

                                    </select>
                                </div>

                                <input type="hidden" name="equipamento" placeholder="Digite o seu equipamento" onChange={setEquipamento} value={content.equipamento} />


                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="nome" placeholder="Digite seu nome" onChange={onChangeInput} value={content.nome} required />
                                    </div>

                                   

                                    <div className="field text">
                                        <input type="text" name="whatsapp" placeholder="Digite seu WhatsApp" onChange={onChangeInput} value={content.whatsapp} required />
                                    </div>


                                    <div className="field text">
                                        <input type="text" name="endereco" placeholder="Digite seu endereco" onChange={onChangeInput} value={content.endereco} required />
                                    </div>

                                    <div className="field text">
                                        <input type="text" name="marca" placeholder="Digite a marca do equipamento (opcional)" onChange={onChangeInput} value={content.marca} />
                                    </div>
                                    <div className="field text">
                                        <input type="text" name="modelo" placeholder="Digite o modelo do equipamento (opcional)" onChange={onChangeInput} value={content.modelo} />
                                    </div>
                                </div>

                                <div className="field textarea">
                                    <textarea cols="30" name="defeito" rows="10" placeholder="Digite o defeito" onChange={onChangeInput} value={content.defeito} ></textarea>
                                </div>
                                <div className="button-area">
                                    {response.formSave ? <button type="submit" disabled>Enviando...</button> : <button type="submit">Enviar</button>}
                                </div>
                            </form>
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
    const response = await fetch(`https://luciano1925.c37.integrator.host/view-content-chamados`);
    const data = await response.json();
    //console.log(data);

    return { props: { data } };
}

export default Chamados;