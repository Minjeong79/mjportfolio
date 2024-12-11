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

export async function mainItemsBox(num: number) {
  let { data, error } = await supabase
    .from("mainitem")
    .select("*")
    .eq("id", num);
  if (error) {
    throw error;
  }

  return data;
}

export async function lIconBox() {
  let { data, error } = await supabase
    .from("lbox")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    throw error;
  }

  return data;
}

export async function oneDB() {
  let { data, error } = await supabase.from("onetable").select("*");
  if (error) {
    throw error;
  }

  return data;
}

