import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import 'dotenv/config';

const server = new McpServer({
    name: 'mcp_server_proto',
    version: '1.0.0',
});

server.tool(
    "getAVSs",
    {
        fullPrompt: "Get all AVSs",
        avsName: "AVS",
    },
    async (fullPrompt, avsName) => {
        try {
            cons resp

        }
        catch (error) {
            return {
                content: [{
                    type: "text",
                    text: "Error: " + error.message,
                }],
            }
        }
    }
)