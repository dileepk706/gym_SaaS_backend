/**
 * Creates a reusable PostgreSQL trigger function that automatically
 * sets `updated_at = now()` before every UPDATE on any table it's attached to.
 *
 * Usage: After creating a table with an `updated_at` column, attach with:
 *   pgm.createTrigger('table_name', 'set_updated_at', {
 *     when: 'BEFORE',
 *     operation: 'UPDATE',
 *     level: 'ROW',
 *     function: 'set_updated_at',
 *   });
 *
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder   }
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createFunction(
    'set_updated_at',
    [],
    {
      returns: 'TRIGGER',
      language: 'plpgsql',
      replace: true,
    },
    `
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    `,
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropFunction('set_updated_at', []);
};
