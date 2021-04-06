import api from './api/api.js'

export default{
    getAllSerie(){
        return  api.get('/gestion-usuario/serie')
        .then(response => response.data )
        .then(items =>{
            let series  = items.map(item=>{
                let serie={}; 
                serie.id = item.idSerie,
                serie.nombre = item.nombre,
                serie.descripcion = item.descripcion
                return serie;

            });
            return series;
        });
    },
    deleteSerie(id){
        return api.delete(`/gestion-usuario/serie/${id}`)
    },
    createSerie(serieForm){
        return api.post('/gestion-usuario/usuario/serie',{
            nombre: serieForm,
            descripcion: serieForm.descripcion

        });

    }
}