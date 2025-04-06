/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("job_applications", (table) => {
        table.increments("id").primary();
        table.string("job_title").notNullable();
        table.string("company").notNullable();
        table.enum("status", ["Applied", "Interview Scheduled", "Offer Received", "Rejected"]);
        table.date("applied_date").defaultTo(knex.fn.now());
        table.text("notes");
        table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
        table.timestamps(true, true);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable("job_applications", (table) => {
        table.dropForeign("user_id")
    }).then(() => {
        knex.schema.dropTableIfExists("job_applications");
    })
};
