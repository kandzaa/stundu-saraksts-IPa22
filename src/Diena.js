import Stunda from './Stunda';
import Skolotajs from './Skolotajs';
import Kabinets from './Kabinets';



function Diena(props){
    // const stunduSarakstsJSX = props.stundas.map((stunda) => {
    //     return <Stunda name={stunda}/>
    // });

    // return(
    //     <>
    //     <ol>
    //         {stunduSarakstsJSX}
    //     </ol>
    //     </>
    // )
return(
    <>
    <table >
        <h1><tr><th>{props.nosaukums}</th></tr></h1>
<ol>
        <tr>
            <td>Stunda</td>
            <td>Skolotajs</td>
            <td>Kabinets</td>
        </tr>

    <li>
        <tr>
            <td><Stunda stundas={props.stundas[0]}/></td>
            {/* <td><Skolotajs Vards={PirmdienasSkolotajs[0]} /></td>
            <td><Kabinets kab={PirmdienasKabinets[0]} /></td> */}
        </tr>
    </li>

    <li>
        <tr>
            <td><Stunda stundas={props.stundas[1]}/></td>
            {/* <td><Skolotajs Vards={PirmdienasSkolotajs[1]} /></td>
            <td><Kabinets kab={PirmdienasKabinets[1]} /></td> */}
        </tr>
    </li>

    <li>
        <tr>
        <td><Stunda stundas={props.stundas[2]}/></td>
            {/* <td><Skolotajs Vards={PirmdienasSkolotajs[2]} /></td>
            <td><Kabinets kab={PirmdienasKabinets[2]} /></td> */}
        </tr>
    </li>

    <li>
        <tr>
        <td><Stunda stundas={props.stundas[3]}/></td>
            {/* <td><Skolotajs Vards={PirmdienasSkolotajs[3]} /></td>
            <td><Kabinets kab={PirmdienasKabinets[3]} /></td> */}
        </tr>
    </li>
</ol>
        <br />
    </table>
    </>
);
}

export default Diena;
