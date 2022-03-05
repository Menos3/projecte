export class AssetsList {


    assets;
    // assetsFirebaseUrl='https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/assets.json';

    constructor() {

        this.assets = this.obtenirDades();


    };
    

    // async getAssets(){
    //     try{
    //         let response =await axios(this.assetsFirebaseUrl);
    //         this.assets=response.data;
    //         if(!this.assets){
    //             this.assets=[];
    //         }
    //         return this.assets;
    //     }catch(e){
    //         console.log("no se cargan los assets")
    //     }
    // }
    // async createAsset(asset) { 
    //     try {
    //         if (!this.assets) {
    //             this.assets = [];

    //         }
    //         this.assets.push(asset);
    //         (await axios(this.assetsFirebaseUrl,
    //             {
    //                 method: "PUT",
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 data: JSON.stringify(this.assets)
    //             })
    //         );
    //     } catch (e) { 
    //         console.log(e);
    //         console.log('Los assets no se suben');
    //     }
    // }
    // async deleteAsset(id){
    //     try{
    //         await this.getAssets();
    //         this.assets=this.assets.filter(element=>element.id !=id);
    //         const rest=(await axios(this.assetsFirebaseUrl,
    //             {
    //                 method:"PUT",
    //                 headers:{
    //                     'content-Type':'application/json'
    //                 },
    //                 data:JSON.stringify(this.assets)
    //             })
    //         );
    //         console.log(rest.data)
    //         return rest.data
    //     }catch(e){
    //         console.log('no se pueden borrar los assets')
    //     }
    // }
    obtenirDades() {
        let assets = [{
                "id_asset": 0,
                "model": "Monitor BENQ GW240",
                "location": "Servidors"

            },
            {
                "id_asset": 1,
                "model": "Monitor BENQ GW240",
                "location": "Servidors"

            },
            {
                "id_asset": 2,
                "model": "Teclat Lenovo",
                "location": "Servidors"

            },
            {
                "id_asset": 3,
                "model": "Monitor BENQ GW240 / 1",
                "location": "Aula 106"

            }, {
                "id_asset": 4,
                "model": "Monitor BENQ GW240 / 2",
                "location": "Aula 106"

            }, {
                "id_asset": 5,
                "model": "Impressora Konica Minolta",
                "location": "Departament Informàtica"

            }, {
                "id_asset": 6,
                "model": "Router Cisco XXXX",
                "location": "Servidors"

            }, {
                "id_asset": 7,
                "model": "Projector Optmoa GT670",
                "location": "Aula 110"

            },
        ]




        return assets;
    }
}