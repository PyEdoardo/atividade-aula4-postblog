import fetch from 'node-fetch';

interface Post {
    userId: number
    id: number
    title: string
    body: string
};

interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
};

async function getPostComComentarios(postId: number) {
    try {
            console.log("Buscando post...");
            const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const post: Post = await postResponse.json();

            console.log("Buscando comentários...");

            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const comments: Comment = await commentsResponse.json();
            const resultado: any = { ...post, comments };

            console.log(" Post Completo ---");
            console.log("Título:", resultado.title);
            console.log("Primeiro Comentário:", resultado.comments[0].name);
        } catch(e) { console.error("Erro!", e); 
    }
}
getPostComComentarios(1);