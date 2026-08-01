// netlify/functions/health.js
exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: true,
      keyConfigured: !!process.env.OPENROUTER_API_KEY
    })
  };
};
