require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log("Mi URL de Supabase es:", supabaseUrl);
console.log("¿Tengo mi llave secreta?:", supabaseKey ? "Sí" : "No");

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;