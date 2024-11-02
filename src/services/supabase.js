import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";

const url = "https://ljroxogsifnbeofppyii.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqcm94b2dzaWZuYmVvZnBweWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMzIxMjMsImV4cCI6MjA0MjcwODEyM30.a2E8aOE3IiNbs_ts9-Zbl6_qkGAoGUiH_W4dNFq0u-8";

const supabase = await createClient(url, key);

async function getPosts() {
  const { data, error } = await supabase.from("blog-posts").select("*");

  !error
    ? toast.success("Posts retrieved successfully")
    : toast.error("There was an error getting posts");
  return data;
}

export { getPosts };
