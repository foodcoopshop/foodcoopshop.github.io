
DROP TABLE IF EXISTS `queued_jobs`;
CREATE TABLE `queued_jobs` (
  `id` int NOT NULL,
  `job_task` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `job_group` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reference` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `notbefore` datetime DEFAULT NULL,
  `fetched` datetime DEFAULT NULL,
  `completed` datetime DEFAULT NULL,
  `progress` float DEFAULT NULL,
  `attempts` int NOT NULL DEFAULT '0',
  `failure_message` text,
  `workerkey` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` int NOT NULL DEFAULT '5'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `queued_jobs`
--
ALTER TABLE `queued_jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `completed` (`completed`),
  ADD KEY `job_task` (`job_task`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `queued_jobs`
--
ALTER TABLE `queued_jobs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

