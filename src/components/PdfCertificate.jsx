import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfMake.vfs;;
import axios from 'axios';

const PdfCertificate = ({nid}) => {


  const getUserInformation=async()=>{
    const result=await axios.get("https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/vaccine/view_vaccines_completed/"+nid)
    .then((response)=>{
      console.log(response.data.data);
      return response.data.data;
    }).catch((err)=>{
      console.log(err);
      return [];
    });
    return result;
  }

  const getUserDetails=async()=>{
    const result=await axios.get("https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/user/get-user/"+nid)
    .then((response)=>{
      console.log(response.data);
      return response.data;
    }).catch((err)=>{
      console.log(err);
      return [];
    });
    return result;
  }

  const generatePDF = async() => {
    const result=await getUserInformation();
    const result2=await getUserDetails();
    const tableData=result.map((data) =>[(new Date(data.vaccination_date)).toDateString(),data.vaccine_name,data.dose_no,data.administeredAt])
    const documentDefinition = {
      content: [
        { text: 'Vaccine Certification', style: 'header' },
        { text: '\n\n' },
        { text: 'Name:', style: 'subheader' },
        { text: result2.user.name},
        { text: 'NID:', style: 'subheader' },
        { text: nid },
        { text: '\n\n' },
        { text: 'Dates and Vaccines Taken:', style: 'subheader' },
        {
          table: {
            body: [
              ['Date', 'Vaccine Name', 'Dose No.', 'Administered At'],
              ...tableData,
            ],
          },
        },
      ],
      footer: {
        text: 'Received from vaccine-app.netlify',
        style: 'footer'
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center'
        },
        subheader: {
          fontSize: 14,
          bold: true
        },
        footer: {
          fontSize: 10,
          italics: true,
          alignment: 'center'
        }
      }
    };
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('certificate.pdf');
  };
  return (
    <>
    <button
    type="button"
    title="Start buying"
    className="w-full py-3 px-6 text-center rounded-full transition text-indigo-900  bg-indigo-300 hover:bg-indigo-500 hover:text-white active:bg-indigo-400 focus:bg-indigo-300 sm:w-max"
    onClick={()=>generatePDF()}
    
  >
    <span className="block font-semibold text-lg">
      Download Certificate
    </span>
  </button>
  </>
   );
}
 
export default PdfCertificate;