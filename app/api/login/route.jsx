export async function POST(request) {
  try {
    const data = await request.json();
    const { username, password } = data;
    console.log("data =" + JSON.stringify(data));
    console.log("try =");
  } catch {
    console.log("error");
  }
}
