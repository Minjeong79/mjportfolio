import { supabase } from "@/utils/supabase/createClient";
import { User } from "@supabase/supabase-js";

export async function name() {
    
let { data: mainbox, error } = await supabase
.from('mainbox')
.select("*")

}