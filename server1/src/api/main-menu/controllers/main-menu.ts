/**
 * main-menu controller
 */
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::main-menu.main-menu",
	({ strapi }) => ({
		async find(ctx) {
			const entity = await strapi.entityService.findMany(
				"api::main-menu.main-menu",
				{
					populate: {
						MainMenuItems: {
							on: {
								"menu.dropdown": {
									populate: {
										sections: true,
									},
								},
								"menu.menu-button": true,
								"menu.menu-link": true,
							},
						},
					},
				}
			);

			return entity;
		},

		async findOne(ctx) {
			const { id } = ctx.params;

			const entity = await (strapi.entityService as any).findOne(
				"api::main-menu.main-menu",
				{
					documentId: id,
					populate: {
						MainMenuItems: {
							on: {
								"menu.dropdown": {
									populate: {
										sections: true,
									},
								},
								"menu.menu-button": true,
								"menu.menu-link": true,
							},
						},
					},
				}
			);
			return entity;
		},
	})
);
