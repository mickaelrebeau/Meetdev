export const createTokenWithCode = async (code: string) => {
    const url = `https://github.com/login/oauth/access_token?client_id=1d346e1b8f7973c3cb2d&client_secret=d8643715380f550a0057391d5d39704856fe49e7&code=${code}`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }); 

    return response.json();
};