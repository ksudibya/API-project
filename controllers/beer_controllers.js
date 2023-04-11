import Beer from "../models/beer_model.js";

export const getBeers = async (req, res) => {
    try {
        const beers = await Beer.find(); 
        res.json(beers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
};

export const getBeer = async (req, res) => {
    try {
        const {id} = req.params;
        const beer = await Beer.findById(id);

        if (beer) {
            return res.json(beer);
        }
        res.status(400).json({message: "Beer not found!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
};
export const createBeer = async (req, res) => {
    try {
        const beer = new Beer(req.body);
        await beer.save();
        res.status(201).json(beer);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
};

export const updateBeer = async (req, res) => {
    const {id} = req.params;
    const beer = await Beer.findByIdAndUpdate(id, req.body);
    res.status(200).json(beer);
};

export const deleteBeer = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Beer.findByIdAndDelete(id);

        if (deleted) {
            return res.status(200).send("Beer deleted");
        }
        throw new Error ("Beer not found");

    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
};

