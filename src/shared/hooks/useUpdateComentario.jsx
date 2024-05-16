export const updateComentario = async (id, commentId, texto) => {
    try {
        return await apiClient.put(`/public/${id}/comupdate/${commentId}`, { texto });
    } catch (error) {
        return { error: true, e: error };
    }
};