import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content';

async function getPosts() {
    const allPlugins = await getCollection("plugins");

    return allPlugins.map((plugin) => ({
        slug: plugin.slug,
        title: plugin.data.title,
        description: plugin.data.description,
        categories: plugin.data.categories,
    }))
}

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(JSON.stringify(await getPosts()), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}