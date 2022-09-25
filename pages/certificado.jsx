import { Document, View, Page, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import jsonwebtoken from "jsonwebtoken";
import { redirect } from "next/dist/server/api-utils";
import Connection from "./api/connection";

export default function Certificado({nome_aluno, nome_responsavel}) {
    Font.register({
        family: "londrina",
        fonts: [{
            src: "/fonts/LondrinaSolid-Regular.otf"
        }]
    })
    const styles = StyleSheet.create({
        logo: {
            width: 60
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-end",
            paddingTop: 30,
            paddingBottom: 10,
            fontFamily: "londrina",
            backgroundColor: "#4B08AD"
        },
        warn: {
            fontSize: 8,
            color: "#e9e9e9"
        },
        top: {
            textAlign: "center",
            marginTop: 70,
            fontFamily: "londrina"
        },
        certificado: {
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 30,
            color: "#FF0099",
            fontFamily: "londrina"
        },
        conclusao: {
            fontSize: 12,
        },
        name: {
            fontSize: 60,
            textAlign: "center",
            marginTop: 60,
            marginBottom: 20,
            color: "#4B08AD",
            fontFamily: "londrina"
        },
        description: {
            fontSize: 12,
            textAlign: "center",
            fontFamily: "londrina"
        },
        footer: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 180,
            fontFamily: "londrina"
        },
        responsavelContainer: {
            textAlign: "center"
        },
        responsavel: {
            borderBottom: "2px solid black",
            textAlign: "center",
            paddingBottom: 5,
        },
        labelResponsavel: {
            fontSize: 9,
            marginTop: 10
        },
        waterMark: {
            color: "#4B08AD" 
        }

    });

    return (
                <Document>
                    <Page size="A4" orientation="landscape" style={styles.page}>
                        <View style={styles.header}>
                            <Image src="/logo.png" alt="logo" style={styles.logo}/>
                            <Text style={styles.warn}>*este certificado é meramente fictício,<br /> assim como a empresa e não apresenta qualquer valor real</Text>
                        </View>
                        <View style={styles.top}>
                            <Text style={styles.certificado}>CERTIFICADO</Text>
                            <Text style={styles.conclusao}>Conclusão da 1ª Galáxia</Text>
                        </View>
                        <View>
                            <Text style={styles.name}>{nome_aluno}</Text>
                            <Text style={styles.description}>
                                O astronauta {nome_aluno} concluiu a primeira galáxia e, <br />
                                com isso adquiriu novos conhecimentos
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <View style={styles.responsavelContainer}>
                                <Text style={styles.responsavel}>{nome_responsavel}</Text>
                                <Text style={styles.labelResponsavel}>responsável</Text>
                            </View>
                            <Text style={styles.waterMark}>Monstronautas</Text>
                        </View>
                    </Page>
                </Document>
    )
}

export async function getServerSideProps(ctx) {
    try {
        const token = ctx.query.token;
        const id = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        let con = await Connection("SELECT nome_aluno, fk_id_responsavel from tb_alunos where id_aluno=?", [id.id]);
        const nome_aluno = con[0].nome_aluno;

        con = await Connection("SELECT nome_responsavel from tb_responsavel where id_responsavel=?", [con[0].fk_id_responsavel]);
        const nome_responsavel = con[0].nome_responsavel;
        return {
            props: {
                nome_aluno: nome_aluno,
                nome_responsavel: nome_responsavel
            }
        }
    } catch {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    
}