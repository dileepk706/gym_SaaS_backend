/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  // Create enum for gym status
  pgm.createType('gym_status', ['trial', 'active', 'suspended']);

  // Create the gym (tenant) table
  pgm.createTable('gym', {
    id: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('gen_random_uuid()'),
    },
    name: {
      type: 'varchar(255)',
      notNull: true,
    },
    email: {
      type: 'varchar(255)',
      notNull: true,
      unique: true,
    },
    phone: {
      type: 'varchar(20)',
    },
    logo_url: {
      type: 'text',
    },
    status: {
      type: 'gym_status',
      notNull: true,
      default: 'trial',
    },
    trial_ends_at: {
      type: 'timestamp with time zone',
    },
    subscription_plan_id: {
      type: 'uuid',
    },
    created_at: {
      type: 'timestamp with time zone',
      notNull: true,
      default: pgm.func('now()'),
    },
    updated_at: {
      type: 'timestamp with time zone',
      notNull: true,
      default: pgm.func('now()'),
    },
  });

  // Index on email for fast lookups
  pgm.createIndex('gym', 'email');

  // Index on status for filtering
  pgm.createIndex('gym', 'status');

  // Attach the auto-update trigger for updated_at
  pgm.createTrigger('gym', 'set_updated_at', {
    when: 'BEFORE',
    operation: 'UPDATE',
    level: 'ROW',
    function: 'set_updated_at',
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTrigger('gym', 'set_updated_at');
  pgm.dropTable('gym');
  pgm.dropType('gym_status');
};
