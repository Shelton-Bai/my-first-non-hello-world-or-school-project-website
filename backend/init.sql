CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment VARCHAR(1000) NOT NULL,
    commenter VARCHAR(100) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- test stuff, remove later
DELETE FROM comments;

INSERT INTO comments (comment, commenter, timestamp) VALUES
    ('This is a dummy comment 1', 'John Doe', '2024-02-22 10:00:00'),
    ('This is a dummy comment 2', 'Jane Smith', '2024-02-22 10:05:00'),
    ('This is a dummy comment 3', 'Alice Johnson', '2024-02-22 10:10:00'),
    ('This is a dummy comment 4', 'Bob Brown', '2024-02-22 10:15:00'),
    ('This is a dummy comment 5', 'Emily Jones', '2024-02-22 10:20:00'),
    ('This is a dummy comment 6', 'Michael Wilson', '2024-02-22 10:25:00');
