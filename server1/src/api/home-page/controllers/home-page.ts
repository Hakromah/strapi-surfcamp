/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::home-page.home-page",
	({ strapi }) => ({
		async find(ctx) {
			const entity = await strapi.entityService.findMany(
				"api::home-page.home-page",
				{
					populate: {
						blocks: {
							on: {
								"blocks.hero-section": {
									populate: {
										image: {
											fields: ["url", "alternativeText"],
										},
										logo: {
											populate: {
												image: {
													fields: ["url", "alternativeText"],
												},
											},
										},
										cta: true,
									},
								},
								"blocks.info-block": {
									populate: {
										image: {
											fields: ["url", "alternativeText"],
										},
										cta: true,
									},
								},
							},
						},
					},
				}
			);
			return entity;
		},
	})
);
