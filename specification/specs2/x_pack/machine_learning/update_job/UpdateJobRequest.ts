class UpdateJobRequest extends RequestBase {
	analysis_limits: AnalysisMemoryLimit;
	background_persist_interval: Time;
	custom_settings: Map<string, any>;
	description: string;
	model_plot_config: ModelPlotConfigEnabled;
	model_snapshot_retention_days: long;
	renormalization_window_days: long;
	results_retention_days: long;
}