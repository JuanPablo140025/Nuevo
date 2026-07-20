const supabase = require('../config/supabaseClient');

// SELECT: Traer todas
const getAllCriaturas = async (req, res) => {
    const { data, error } = await supabase.from('criaturas').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// SELECT + WHERE: Traer solo una (El Bonus)
const getCriaturaById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('criaturas').select('*').eq('id', id).single();
    if (error) return res.status(404).json({ error: "Criatura no encontrada" });
    res.json(data);
};

// INSERT: Crear nueva
const createCriatura = async (req, res) => {
    const { nombre, tipo, poder, capturada } = req.body;
    const { data, error } = await supabase
        .from('criaturas')
        .insert([{ nombre, tipo, poder, capturada }])
        .select(); 
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data[0]);
};

// UPDATE: Modificar existente
const updateCriatura = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('criaturas')
        .update(req.body)
        .eq('id', id)
        .select();
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ error: "No se encontró el ID" });
    res.json(data[0]);
};

// DELETE: Eliminar
const deleteCriatura = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('criaturas')
        .delete()
        .eq('id', id)
        .select();
    if (error) return res.status(500).json({ error: error.message });
    if (data.length === 0) return res.status(404).json({ error: "ID no encontrado para eliminar" });
    res.json({ mensaje: "Eliminada", criatura: data[0] });
};

module.exports = { getAllCriaturas, getCriaturaById, createCriatura, updateCriatura, deleteCriatura };