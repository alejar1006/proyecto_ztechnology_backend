import { Request, Response } from 'express';
import Quote from '../models/quote';
import Quote_detail from '../models/quote_detail';



export const consultQuote = async(req: Request, res: Response) => {  
  const quotes  = await Quote.findAll({
      attributes: ['detalle', 'precio', 'idUsuario', 'idCliente' ], 
         
    })
    
    res.status(200).json({
        msg: 'Consultar cotizaciones',
        quotes
    })
};


export const consultQuoteById = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const quotes = await Quote.findByPk(id);

    res.status(200).json({
        quotes
    })
};


export const updateQuote = async (req: Request, res: Response) => {
    const { id, detalle, precio, idUsuario, idCliente, productos  } = req.body;

    const quote = await Quote.update({ detalle, precio, idUsuario, idCliente, productos  }, {
        where: {
            id
        }
    });  
    res.status(200).json({
        msg: `La cotizacion con el ID: ${id} ha sido actualizada`
    })
};

//ELIMINAR
export const deleteQuote = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Quote.destroy({
    where: {
      id
    }
  });

  res.status(200).json({
        msg: `La cotzacion con el ID: ${id} ha sido eliminado`
    })
}

//REGISTRAR COTIZACION
export const saveQuote = async (req: Request, res: Response) => {
  const { detalle, precio, idUsuario, idCliente, productos } = req.body;
  
  // Crear la cotización
const quote = await Quote.create({      
  detalle,
  precio,
  idUsuario,
  idCliente,

});

//REGISTRAR PRODUCTOS RELACIONADOS A LA COTIZACION
for (const product of productos) {
  await Quote_detail.create({
    idCotizacion: quote.dataValues.id,
    idProductos: product.idProductos,
    cantidad: product.cantidad,
    total: product.total,
  });
  } 
    res.status(201).json({ message: 'Cotización registrada exitosamente' }); 
}