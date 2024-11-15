import { supabase } from "@/utils/supabase/createClient";

export async function coinBox() {
  let { data, error } = await supabase.from("coinbox").select("*");
  if (error) {
    throw error;
  }

  return data;
}

export async function btnBox() {
  let { data, error } = await supabase.from("btnbox").select("*");
  if (error) {
    throw error;
  }

  return data;
}
