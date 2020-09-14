import React, {useState, useEffect} from 'react'
import DataTable, {createTheme} from 'react-data-table-component';


createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

export default function Table(state) {

const [countryData, setCountryData] = useState([]);

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Region',
    selector: 'region',
    sortable: true,
  },
  {
    name: 'Population',
    selector: 'population',
    sortable: true,
  },
  {
    name: 'Language',
    selector: 'languages[0].name',
    sortable: true,
  },
];

   /*  const [row, setRow] = useState([])
    const [toggledClearRows, setToggledClearRows] = useState(false)

    const handleChange = (selected) =>{
        console.log( 'Selected Rows:', setRow(selected) )
    } */

/*     const handleClearRows = () => setToggledClearRows(!toggledClearRows)
 */const endpoint = 'https://restcountries.eu/rest/v2/all';



    useEffect(() =>{
        fetchData()
    }, [])
   

    const  fetchData = async () =>{
        const fetchData = await fetch (endpoint);
        const jsonData = await fetchData.json();
        setCountryData(jsonData); 
       
    }
     console.log(countryData)
/* let languageLengthN =countryData[6].flag;
 */



console.log(countryData[0]);

const result = countryData[0].name;
if(result){
  console.log(result)

}
    return (
        <>
            <DataTable
            title="List of Countries"
            columns={columns}
            data ={countryData}
            /* pagination ={true}
            paginationPerPage={9}
            fixedHeader ={true}
            selectableRows
            Clicked
            selected ={handleChange} */
            />
        </>
      )
}
