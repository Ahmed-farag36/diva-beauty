import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Purerelax | Spa & Beauty React Nextjs Template"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead